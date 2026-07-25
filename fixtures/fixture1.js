import {test as base} from "@playwright/test"

import HomePage from "../pages/AutomationNew/HomePage.js"
import PlaywrightPractice from "../pages/AutomationNew/PlaywrightPracticePage.js";

export const test= base.extend({
    homePage: async ({page}, use)=>{
        await use(new HomePage(page));
    },

    playWrightPractice:async ({page}, use)=>{
        await use(new PlaywrightPractice(page))
    }
})
export {expect} from "@playwright/test";