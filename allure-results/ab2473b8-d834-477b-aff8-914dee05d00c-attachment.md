# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: uploadFiles.spec.js >> UploadFiles
- Location: tests\uploadFiles.spec.js:5:5

# Error details

```
Error: locator.click: Test ended.
Call log:
  - waiting for getByText('Upload Multiple Files')
    - locator resolved to <button type="submit">Upload Multiple Files</button>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - element is outside of the viewport
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - element is outside of the viewport
    - retrying click action
      - waiting 100ms
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - element is outside of the viewport
  - retrying click action
    - waiting 500ms

```

# Test source

```ts
  1  | export default class HomePage{
  2  |     constructor(page){
  3  | 
  4  |         this.page=page;
  5  |         //WikiPediaLink Locator
  6  |         this.wikiPediaLink= page.locator(".wikipedia-icon");
  7  | 
  8  |         //multiple files locator
  9  |         this.multipleFiles= page.locator("#multipleFilesInput");
  10 | 
  11 | 
  12 |         //WikiPediaTextBox
  13 |         this.wikiPediaTextBox=page.locator("#Wikipedia1_wikipedia-search-input");
  14 |         //WikiSearchBox Locator
  15 |         this.wikiSearch=page.locator("//span//input[@class='wikipedia-search-button']");
  16 | 
  17 |         //Suggestions Locator of wikisearch
  18 |         this.wikiSearchSuggestion=page.locator("#wikipedia-search-result-link");
  19 |         //playwright practice Link
  20 |         this.playwrightPracticeLink=page.locator("[href='https://testautomationpractice.blogspot.com/p/playwrightpractice.html']")
  21 | 
  22 | 
  23 |     }
  24 | 
  25 |     //click on the multiple Files upload
  26 | 
  27 |     async clickOnUploadMultipleFiles(){
  28 |         await this.multipleFiles.setInputFiles(["C:\\Users\\Admin\\Desktop\\Asam Ajay\\Ideas\\Farms_1.png","C:\\Users\\Admin\\Desktop\\Asam Ajay\\Welcome to Word.docx"]);
  29 |         await this.page.getByText("Upload Multiple Files").click();
  30 |     }
> 31 | 
     |                                                        ^ Error: locator.click: Test ended.
  32 |     
  33 |     //click on PlaywrightPracticeLink
  34 | 
  35 |     async clickOnPlaywrightPracticeLink(){
  36 |         await this.playwrightPracticeLink.click();
  37 |     }
  38 | 
  39 |     //click on the WikiPedia Link
  40 |     async clickOnWikiPediaLink(){
  41 |         await this.wikiPediaLink.click({timeout:5000});
  42 |     }
  43 | 
  44 |     //click on the Search of WikiPedia and select all from the suggestion boxes to 
  45 |     //check whether all are working or not
  46 |     async clickonAllSuggestions(){
  47 | 
  48 |         await this.wikiPediaTextBox.fill("SDET");
  49 |         await this.wikiSearch.click();
  50 |         await this.wikiSearchSuggestion.first().waitFor();
  51 |         //await expect(this.wikiSearchSuggestion.first()).toBeVisible();
  52 | 
  53 |        const count= await this.wikiSearchSuggestion.count();
  54 |        console.log(count);
  55 | 
  56 |         const suggestions=await this.wikiSearchSuggestion.all();
  57 |         for(const suggestion of suggestions){
  58 |            await suggestion.click();
  59 |            
  60 |         }
  61 |     }
  62 | 
  63 | 
  64 | 
  65 | 
  66 | 
  67 | }
```