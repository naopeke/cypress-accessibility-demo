# cypress-accessibility-demo
## Checks that can b automated  
1. Page title  
2. Image text alternatives  
3. Headings  
4. Colour Contrast  
5. HTML Structure  
6. ARIA Labels  
  
## WAI
https://www.w3.org/WAI/  
  
## Easy Checks – A First Review of Web Accessibility  
https://www.w3.org/WAI/test-evaluate/preliminary/  
  
## List of Axe HTML 4.0 rules  
https://dequeuniversity.com/rules/axe/4.0  
  
## Common Shortcuts  
CTRL (CMD) + L : to put the focus on your browser's address bar  
TAB : to go to specific elements such as links or buttons  
SHIFT + TAB : simply reverse the direction  
Arrow keys : to scroll to a specific viewport  
Space : to tick or untick checkboxes or radio buttons  
Enter : to activate buttons or links that is currently focused on  
  
## Screen Readers  
VoiceOver for iOS, NVDA for windows, JAWS for windows, Android Talkback for android  
  
## A11y Tools  
1. Axe https://chromewebstore.google.com/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd?pli=1  
2. WAVE https://wave.webaim.org/extension/  
3. Google Lighthouse https://chromewebstore.google.com/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk?hl=es  

4. Axe CLI, Jest Axe, Cypress-Axe, Axe Selenium, Axe WebdriverIO, Axe TestCafe  

 ## Axe CLI  
```
 axe google.com --browser chrome  
 axe https://bookcart.azurewebsites.net/, https://bookcart.azurewebsites.net/filter?category=fantasy --browser chrome --disable link-name
  axe https://bookcart.azurewebsites.net/, https://bookcart.azurewebsites.net/filter?category=fantasy --browser chrome --save test-results.json
```
