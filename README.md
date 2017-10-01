# E-Skate Web Application
---
*A front-end eCommerce web application that integrates an Admin interface allowing authorized users to handle CRUD operations on website components, store items, and orders placed by customer. This application communicates with the E-Skate back-end API at [E-Skate back-end](https://eskate-backend.herokuapp.com/)*

## Key Features
---
- eCommerce user interface
  - Landing Page
    - Header  
    - Main  
    - Footer
- Admin interface  
  - Website components / store settings
  - Store items
  - Customer Orders
- ToDo

## eCommerce  
---  

***Landing Page***  

*Header*  
- Logo.  
- Nav Bar (SPA).  
  - Boards/Parts jump to their respective section.  
  - About us (ToDo).  
- Cart Button.  
  - Accumulates quantity and price as items are. added/deleted from cart.  
  - Click on opens cart view (held in Main component).  

*Main*  
> Split into three components: hero photo, board items, parts items. Boards and parts share the same pop up modal component for view item button.

- Hero Image.  
- Banner bar for Boards.  
- Item cards for all `boards`.  
  - on Click opens item modal containing full details of item and Add to Cart button.  
- Banner bar for Parts  
  - Item cards for all `parts`.  
    - on Click opens item modal containing full details of item and Add to Cart button.

*Footer*  
- Social media icons.  
- Contact us info with map location.  

## Admin Interface  
---
Access login page from `https://eskate-frontend.herokuapp.com/admin`  

Authorized users input:
- username  
- password



**Items CRUD view**
![admin-store-items](https://s3-us-west-2.amazonaws.com/eskate/adminitems.png)  

**Store Settings CRUD view**
![admin-store-settings](https://s3-us-west-2.amazonaws.com/eskate/adminstoresettings.png)  


## ToDo  
---  
- Checkout component  
- 3rd party payment processor  
- Orders component in Admin View
