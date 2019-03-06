module.exports = {
      	"Case1" : function(client){
          client
          .url("http://localhost:8000")
          .waitForElementVisible('body', 10000)
          .setValue("#EMAIL_INPUT","jessie.nguyen@mailinator.com")
.setValue("#PASSWORD_INPUT","123456")
.click("#LOGIN_BTN")
.waitForElementVisible("#LOGOUT_BTN",10000)
.pause(1000)
.click(".Lalala > a")
.assert.containsText("#HEADER_STORE","SOKONI Store Management")
.pause(1000)
.click("#LOGOUT_BTN")
          .pause(2000)
          .end
        },
	"Case2" : function(client){
          client
          .url("http://localhost:8000")
          .waitForElementVisible('body', 10000)
          .setValue("#EMAIL_INPUT","jessie.nguyen@mailinator.com")
.setValue("#PASSWORD_INPUT","123456")
.click("#LOGIN_BTN")
.waitForElementVisible("#LOGOUT_BTN",10000)
.pause(1000)
.click(".Lalala > a")
.assert.containsText("#HEADER_STORE","SOKONI Store Management")
.pause(1000)
.click("#LOGOUT_BTN").setValue("#EMAIL_INPUT","jessie.nguyen@mailinator.com")
.setValue("#PASSWORD_INPUT","123456")
.click("#LOGIN_BTN")
.waitForElementVisible("#LOGOUT_BTN",10000)
.pause(1000)
.click(".Lalala > a")
.assert.containsText("#HEADER_STORE","SOKONI Store Management")
.pause(1000)
.click("#LOGOUT_BTN")
          .pause(2000)
          .end
        }

    }