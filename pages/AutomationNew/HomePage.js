export default class HomePage{
    constructor(page){

        this.page=page;
        //WikiPediaLink Locator
        this.wikiPediaLink= page.locator(".wikipedia-icon");
        //WikiPediaTextBox
        this.wikiPediaTextBox=page.locator("#Wikipedia1_wikipedia-search-input");
        //WikiSearchBox Locator
        this.wikiSearch=page.locator("//span//input[@class='wikipedia-search-button']");

        //Suggestions Locator of wikisearch
        this.wikiSearchSuggestion=page.locator("#wikipedia-search-result-link");
        //playwright practice Link
        this.playwrightPracticeLink=page.locator("[href='https://testautomationpractice.blogspot.com/p/playwrightpractice.html']")


    }

    
    //click on PlaywrightPracticeLink

    async clickOnPlaywrightPracticeLink(){
        await this.playwrightPracticeLink.click();
    }

    //click on the WikiPedia Link
    async clickOnWikiPediaLink(){
        await this.wikiPediaLink.click({timeout:5000});
    }

    //click on the Search of WikiPedia and select all from the suggestion boxes to 
    //check whether all are working or not
    async clickonAllSuggestions(){

        await this.wikiPediaTextBox.fill("SDET");
        await this.wikiSearch.click();
        await this.wikiSearchSuggestion.first().waitFor();
        //await expect(this.wikiSearchSuggestion.first()).toBeVisible();

       const count= await this.wikiSearchSuggestion.count();
       console.log(count);

        const suggestions=await this.wikiSearchSuggestion.all();
        for(const suggestion of suggestions){
           await suggestion.click();
           
        }
    }





}