class test {
    login() {
        cy.visit('https://employee-oauth.wlink.com.np/login');
        cy.url().should('include', 'employee-oauth.wlink').then((finalUrl) => {
            cy.log('Final URL:', finalUrl);
            if (finalUrl.includes('employee-oauth.wlink')) {
                // cy.get('[name="logout"]').then(($status) => {
                    // if ($status.attr('style') && $status.attr('style').includes('display: none')) {
                        // cy.log('User is not signed in.');
                        const username = Cypress.env('CYPRESS_USERNAME');
                        const password = Cypress.env('CYPRESS_PASSWORD');

                        cy.get('input[name="username"]').type('susan.shrestha');
                        cy.get('input[name="password"]').type('zxcvbnzxcvbn123$$$', {log: false});
                        cy.contains('span', /sign in/i).click();

                        // cy.get('[name="logout"]').then(($status) => {
                        //     if ($status.attr('style') && $status.attr('style').includes('display: none')) {
                        //         cy.log('User sign in failed.');
                        //     } else {
                        //         cy.visit('/');
                        //     }
                        //     });
                    // } else {
                        cy.log('here');
                        cy.visit('/');
                    // }
                // });
            } else {
              cy.log('page load failed');
            }
        });
    
        // Navigate back to the main application
        // cy.origin('https://retail-billing.wlink.com.np', () => {
        //     cy.visit('/');
        // });
    
        // Verify the redirected URL and interact with the page
        // cy.url({ timeout: 10000 }).should('eq', Cypress.config('baseUrl') + '/');
        //cy.get('#onesignal-slidedown-cancel-button').click();
    }

}

export default new test();