# Networking and Servers
## How the Internet works
1. Web Browser
2. Computer
3. Router
4. ISP
5. Internet
6. Web server

## Client- Server Architecture
- Request and Response

## HTTP (Hypertext transfer protocol)
- The protocol that allows resources to be requested and sent on the internet
- Types of requests
    - GET
    - POST
    - PUT & PATCH
        - (update)
    - DELETE
- Types of Responses
    - 100-199: Informational Responses
    - 200-299: Successful Responses
        - 200 OK
        - 201 Created
    - 300-399: Redirect messages
    - 400-499: Client error responses
        - 404 Not Found
    - 500-599: Server error responses
        - 500 Internal Server Error
        - 502 Bad Gateway

## Testing Tools
- Network Tab in browser Devtools
- Ping
    - Check to see if you can get a response from server
- Curl
    - A way to request data from server
    - Used for testing APIs
- Postman
    - Made for testing APIs (curl wrapper)

## DNS (Domain Name System)
- Computer can't understand www.google.com but they can understand 11.11.11.11
- 11.11.11.11 is an IP address (Internet Protocol)
- Ping www.google.com in terminal and see what you get back

## JS Fetch API
- API: Application Programming Interface
- Fun APIs to try
    - https://imgflip.com/api
    - https://api.chucknorris.io/
    - https://pokeapi.co/
    - https://uselessfacts.jsph.pl/
    - https://github.com/beanboi7/yomomma-apiv2
    - https://techy-api.vercel.app/
- Excercise: 
    - Work in teams and display data from an API (pick one or two to try)