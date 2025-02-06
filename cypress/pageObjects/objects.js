class test {
    login() {
        cy.visit('https://login.wlink.com.np');
        cy.url().should('include', 'login.wlink').then((finalUrl) => {
            cy.log('Final URL:', finalUrl);
            if (finalUrl.includes('login.wlink')) {
                cy.get('[name="logout"]').then(($status) => {
                    if ($status.attr('style') && $status.attr('style').includes('display: none')) {
                        cy.log('User is not signed in.');
                        const username = Cypress.env('CYPRESS_USERNAME');
                        const password = Cypress.env('CYPRESS_PASSWORD');

                        //cy.get('input[name="username"]').type('susan.shrestha');
                        //cy.get('input[name="password"]').type('zxcvbnzxcvbn123$$$', {log: false});
                        cy.contains('span', /sign in/i).click();

                        cy.get('[name="logout"]').then(($status) => {
                            if ($status.attr('style') && $status.attr('style').includes('display: none')) {
                                cy.log('User sign in failed.');
                            } else {
                                cy.visit('/');
                            }
                            });
                    } else {
                        cy.log('here');
                        cy.visit('/');
                    }
                });
            } else {
              cy.log('page load failed');
            }
        });
    }
    
    /*loadFund() {
        cy.visit('/loadfund')
    }*/
    
}

export default new test();