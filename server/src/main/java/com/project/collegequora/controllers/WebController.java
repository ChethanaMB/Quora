package com.project.collegequora.controllers;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

import javax.mail.internet.MimeMessage;

import com.project.collegequora.models.SystemUser;
import com.project.collegequora.repository.SubjectRepository;
import com.project.collegequora.repository.SystemUserRepository;
import com.project.collegequora.response.JWTResponseData;
import com.project.collegequora.response.Response;
import com.project.collegequora.security.JwtTokenUtil;
import com.project.collegequora.service.SystemUserDetailsService;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Lazy;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/web")
@CrossOrigin(origins = { "http://localhost:4200", "http://localhost:3000" })
public class WebController 

{
    @Autowired
	SubjectRepository subjectRepository;
	@Autowired
	SystemUserRepository systemUserRepository;

	@Autowired
    private JavaMailSender javaMailSender;

	@Autowired
	private AuthenticationManager authenticationManager;

	@Autowired
	private JwtTokenUtil jwtTokenUtil;
	
    @Autowired
    PasswordEncoder passwordEncoder;
	@Autowired
	private SystemUserDetailsService systemUserDetailsService;

	@Autowired
	private UserDetailsService userDetailsService;


	@PostMapping("/register")
	public Response saveUser(@RequestBody SystemUser user) 
	{
		if(systemUserRepository.existsByEmail(user.getEmail())){
			return new Response(400,"already a user",null, "");
		}
		user.setPassword(passwordEncoder.encode(user.getPassword()));
		SendVerifyMail(user.getName(),user.getEmail(),121);
		SystemUser newUser = systemUserRepository.save(user);
		if (newUser == null)
			return new Response(400,"already a user",null, " ");
		else
            return  new Response(200, "registration successfull",subjectRepository.findAllByDeptId(user.getDeptId()),"");
	}


	@PostMapping("/login")
	public ResponseEntity login(@RequestBody SystemUser user) 
	{
		try {

			SystemUser newUser = systemUserRepository.findByEmail(user.getEmail());
		
			 if(newUser.isActive()){
			authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(user.getEmail(), user.getPassword()));
			String datais=systemUserDetailsService.getuserEmail(user);
			//String obj =newUser.getRoleId();
		
			final String token = jwtTokenUtil.generateToken(newUser);
			//System.out.println("msg");
			//JWTResponseData jwtResponseData=new JWTResponseData();
			//jwtResponseData.setStatus(true);
			//jwtResponseData.setToken(token);
			//jwtResponseData.setMsg("Login Successful");
			//List<String> dlist = new ArrayList<>();
			//dlist.add(user.getRoleId());
			//if(user.getRoleId().equals("STUDENT")){
			//	dlist.add(user.getDeptId());
			//}
			//jwtResponseData.setData(dlist);
			if(newUser.getRoleId().equals("STUDENT")){
				String xo=newUser.getDeptId();
				System.out.println(xo);
			}else{
				String od=newUser.getDeptId();
				System.out.println(od);
			}
            
			List<String> obj1 = new ArrayList<>();
			obj1.add(newUser.getRoleId());
			obj1.add(newUser.getDeptId());
			obj1.add(newUser.getEmail());
			
			
			return ResponseEntity.ok(new JWTResponseData(true, token, "Login Successfull",obj1));
			//return ResponseEntity.ok(jwtResponseData);
			//subjectRepository.findAllByDeptId(user.getDeptId())));
		 }else{
			return ResponseEntity.ok(new JWTResponseData(false, "", "verify Email!!",""));
		}
		}catch (DisabledException e) {
			return ResponseEntity.ok(new JWTResponseData(false, "", "User Disabled !",","));
		} catch (BadCredentialsException e) {
			return ResponseEntity.ok(new JWTResponseData(false, "", "Invalid User !",","));
		}catch (Exception e) {
			return ResponseEntity.ok(new JWTResponseData(false, "", "Invalid User !",","));
		}
	}
	
	


	
	private boolean SendVerifyMail(String name,String email,int otp) 
	{
		try {
			SimpleMailMessage msg = new SimpleMailMessage();
			MimeMessage mimeMessage = javaMailSender.createMimeMessage();
			MimeMessageHelper messageHelper = new MimeMessageHelper(mimeMessage, false, "UTF-8");
	        messageHelper.setFrom("thbstraining@gmail.com");
	        messageHelper.setTo(email);
	        messageHelper.setSubject("Verification Mail from CollegeQuora");
	        messageHelper.setText("<b><a href=http://localhost:8082/web/vrifcation/"+email+">click </a></b>", true);
	        javaMailSender.send(mimeMessage);
			return true;
		}catch(Exception ex) {
			System.out.println(ex.getMessage());
			return false;
		}
	}

    @GetMapping("/vrifcation/{email}")
    public String vrification(@PathVariable String email)
    {
        SystemUser userdata=systemUserRepository.findByEmail(email);
        System.out.println(userdata);
        userdata.setActive(true);
        System.out.println(userdata);
        systemUserRepository.save(userdata);
        return "<h1>"+email+"</h1>";
    }

	@PostMapping("/logout")
    public Response addUser(@RequestBody String logutstring)
    {
        System.out.println(logutstring);
        return new Response(200,"Logout Sucessfully","logged out", "");
    }

    @GetMapping("/getuserbyemail/{token}")
    public Response getuserbyemailid(@PathVariable String token)
    {
        
        System.out.println(token);
        try{
        String id=jwtTokenUtil.getEmailFromToken(token);
        SystemUser user=systemUserRepository.findById(id).get();
        return new Response(200,"Token fetched",user.getEmail(),token);
        }catch(Exception e){
         return new Response(400,"Session Exprided","", "");
        }
       
    }

	
}
