class login {
    tempLogin() {
        cy.visit('https://login.wlink.com.np');
        cy.get('input[name="username"]').type('susan.shrestha');
        cy.get('input[name="password"]').type('zxcvbnzxcvbn123$$$', {log: false});
        cy.contains('span', /sign in/i).click();
        //cy.visit('/');  //This didn't work. Why?

        


    }
    
    
}

export default new login();