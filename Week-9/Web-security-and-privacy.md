# Web Security and Privacy

## Web Security
### Web Security Oversights
- No user authentication
- Allowing weak authentication
- Not sanitizing form entries and requests
- Not encrypting sensitive communications
- Sessions that don't time out
- Out of date (unpatched) software
    - New vulnerabilities discovered all the time
- Bugs that expose user data

### Agenda
- Attacks
    - Cross-site scripting
    -DDOS
- Network Security
    - Symmetric encryption
    - Asymmentric encryption
    - SSL & HTTPS

### Cross Site Scripting
- The attacker inserts arbitrary HTML on your webpage
    - How can this ever happen?
- What can go wrong
    - Change content on page
    - Steal user's information
- What if the HTML includes script tags?
    - Replace the page with a new one
        - Fake instance of a page to get passwords, accounts, etc.
    - Pass information from the page to foreign page
        - Cookies, passwords, credit card numbers, session ids
    - Download user's cookies (passwords) for other sites

### Cross Site Scripting: Mitigation
- Don't allow HTML to be inserted
    - Backend libraries to strip out HTML tags
- Don't allow malicious HTML to be inserted
    - Backend libraries sanitize HTML
        - Limited set of allowed tags for formatting
- Similar techniques may be ised to protect against SQL injection

### Distributed Denial of Service
- DDOS
- Overwhelm a server with malicious requests to block regular users 
- Requests don't come from one machine
    - These are easily blocked
- Attacker uses a number of controlled machines, often compromised 
    - Hard to spot

### DDOS Mitigation
- Rate limiting
    - Volume of requests from a user
- Throw out excess traffic at random
    - Some will be malicious, some will be legitimate
- Distribute traffic across a network
    - By distributing load, can accomodate huge volume

### Network Security
- Need to send requests: Get / Post
- Need to send responses: HTML documents
- Network channels aren't necessarily secure
- Confidentiality: What if someone intercepts ans reads this message?
- Integrity: What if someone intercepts and alters this message?

### Secure Communication
- For anyone other than the inteded recipient, we want our message to be
    - Unreadable
    - Impossible to change without detection
- Encryption function
    - F(x) = Y
        - Easy to compute
    - F^-1(y) = X
        - Difficult to compute (without addidtional knowledge)

### Browser-Server Communication
- Can use encrypted communication in a web app
    -HTTPS represents an encrypted (secure) connection
- HTTPS is a secure HTTP
    - Data passed back and forth is encrypted
    – Browser and server agree on a key
    – Encryption is then done based on this key
    – This is handled by the Secure Sockets Layer (SSL)

### HHTPS Connections
- Browser makes a connection to the server
- SSL handshake protocol
    - Browser sends and requests a certificate
        - Certificates are effectively keys that can be verified as authentic
        - This is one way public key systems are used
    - Server replies with a certificate of its own
- SSL change cipher protocol
    – Browser and server use their certificates to agree on a key
    – Again using a variant of public key systems
- Communication is done securely using that key (symmetric key encryption)
    - Key is only used for this particular session

### HTTPS Usage
- If you are sending confidential information
    - Passwords
    - Payment information
     -You should use HTTPS
- OPENSSL and other implementations exist
    - Typically built into server and browser
    - Different port used for secure communication


## Web Privacy
### Data Collection - How?
- Form entry
- Mobile OS-provided
- Cookies
- Behavior Logging

### Cookies
- A cookie is a name/value pair created by a website to store information on your computer
- Why would a user want cookies?
    - User authentication (remember me)
    - Site preferences
    - Contents of shopping carts
- Why would a developer use cookies?
    - Better user experience
    - Ad tracking
    - Site metrics

### Privacy Policy
- Statement saying what the web site does with any information it collects
    - Or otherwise obtains from the user
    - And why the web site needs this information
- Generally considered legally binding
    - Must obey the laws of the land
    - Different lands have different laws
- Written in dense legal language
- Users may or may not pay attention