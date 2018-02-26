function validate() {
    let username=$('#username');
    let email=$('#email');
    let password=$('#password');
    let confirmPass=$('#confirm-password');
    let companyCheckbox=$('#company');
    let companyNumber=$('#companyNumber');
    let companyInfo=$('#companyInfo');
    let submitBtn=$('#submit');
    let validDiv=$('#valid');

    companyCheckbox.on("change",function () {
	    if(companyCheckbox.is(":checked")){
	        companyInfo.css("display","block");
	      }else {
	    	companyInfo.css("display","none");
	    }
    })

	submitBtn.on("click",function ( ev ) {
		ev.preventDefault();
	})
	function validateForm() {
	validateInputWithRgx(username,/^[A-Za-z\d]{3,20}$/g);
	validateInputWithRgx(email,/^.*?@.*?\..*$/g);
	if(confirmPass.val()===password.val()){
	    validateInputWithRgx(password,/^\w{5,15}$/g );
		validateInputWithRgx(confirmPass,/^\w{5,15}$/g );

	}else{
	      confirmPass.css("border","solid red");
	      password.css("border","solid red");
	    }
	}
	function validateInputWithRgx(input,pattern  ) {
		if(pattern.test(input.val())){
			input.css("border","none");

		}else {
			input.css("border","solid red")
		}
	}
}
