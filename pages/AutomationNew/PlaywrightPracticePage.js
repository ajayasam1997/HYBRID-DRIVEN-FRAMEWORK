        import{expect} from "@playwright/test";
        //import brokenLinks from "../../data/brokenLinks.json";

        export default class PlaywrightPractice{

            constructor(page){
                this.page=page;

                //HoverButton
                this.pointMe= page.getByRole("button", {name: "Point Me"});

                //double Click Button
    this.copyText=page.getByText("Copy Text");
                //this.copyText= page.getByRole("button", {name: "Copy Text"});

                //new Tab locator
                this.newTabButton=page.getByText("New Tab");

                //confirmation buttton locator
                this.confirmButton=page.getByRole("button", {name: "Confirmation Alert"});
                
            //prompt button locator
            this.promptAlert=page.getByRole("button", {name:"Prompt Alert"});

            //popup Windows Locator
            this.PopupWindowsButton=page.getByRole("button", {name: "Popup Windows"});

                //Email Address Locator
                this.emailAdressBox=page.getByRole("textbox",{name:"email"});

                //Password 
                this.passwordBox=page.getByLabel("Password");

                //age
                this.ageBox=page.getByLabel("Your Age:")

                //RadioButton
                this.radioButton=page.getByRole("radio", {name:" Standard"})

                this.userNameBox= page.getByRole("textbox",{name:'Username'})

                //CheckBox Accept Terms

                this.tickBox= page.getByRole("checkbox", {name: ' Accept terms '})

                //dynamic start/stop locator

                this.startButton = page.getByRole("button", {name:"START"});
                this.stopButton = page.getByRole("button", {name:"STOP"});

            }

            //Functions
            
            //Click on Broken Links

            async clickOnBrokenLinks(link){

                await this.page.getByRole("link", {name:link.name}).click();
            }






            //click on hover Mouse Event

            async mouseHover(){
                await this.pointMe.hover();
            }

            //double click Mouse Events

            async doubleClick(){
                await this.copyText.dblclick();
            }


            //click on new tab

            async clickOnNewTab(){

                await this.newTabButton.click();
            }

            //click on confirmation alert

            async clickOnConfirmAlert(){
                await this.confirmButton.click();
            }

            //click on prompt alert

            async clickOnPromptAlert(){

                await this.promptAlert.click();

            }

            //click on popup Windows button

            async clickOnWindowsPopUp(){
                await this.PopupWindowsButton.click();

            }

        //enter details

        async dynamicButtonClick(){
            if(await this.startButton.isVisible){
                await this.startButton.click();
            }
            else{
                await this.stopButton.click();
            }
        }
            async enterDetails(){

                await this.emailAdressBox.fill("sdet123@gmail.com");
                await this.passwordBox.fill("SDETPassword@123");
                await this.ageBox.fill("19");
                await this.radioButton.check();
            }

        //clickoncheckbox and enter username
            async enterUserNameClickcheckBox(){

                await this.userNameBox.fill("SDET");
                await this.tickBox.check();
            }
        }