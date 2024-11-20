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

### Secure Socket Layer (SSL)
- A protocol that allows data to be privately exchanged over public networks
- Developed by netscape
- Encrypts data sent between a client (usually a web browser) and a web server
- Utilizes both symmetric and asymmetric keys
- HTTPS is HTTP over SSL
- Browsers display a lock icon
- SSL provides secure communication between a client and server by using:
    - Server and client digital certificates for authentication
    - Symmetric-key cryptography using a session key for bulk encryption
    - Public-key cryptography for transfer of the session key

### Digital Certificate
- A form of an asymmetric key
- Also contains information about the certificate, the holder of the certificate, and the issuer of the certificate.
- Used by SSL to authenticate the identity of the web server
- The contents of a server’s digital certificate include:
    - The public key
    - Effective date of the certificate
    - Expiration date of the certificate
    - Details about the Certificate Authority -- the issuer of the certificate
    - Details about the certificate holder
    - A digest of the certificate content

### Certificate Authorization
- A trusted third-party organization or company that issued digital certificates
- Well known certificate authorities:
    - IdenTrust
    - DigiCert
    - GTS


## Web Privacy
### Data Collection - How?
- Form entry
- Mobile OS-provided
- Cookies
- Behavior Logging

### Data Collection: Form/User Entry
- Social Networks
    - Share info with others
    - Connect with friends
    - Attract potential employers
- Online Shopping
    - Credit card for payment
    - Home address for shipping
- Online finances
    - Banking
    - Investments
    - Tax

### Mobile OS-provided
- Contacts
    - "Find your friends on ___"
    - Instant, massive social graph
- Photos
    - May include metadata
- Location
    -"Find __ near you"

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

### Data Collection: Behavior Logging
- Any action a user takes on a webpage can be logged
- HTML event listeners!
    - Clicks
    - Hovers
- Time between actions
    - How long you spend looking at a post
    - Did you skip an ad? At what point in the ad?

### Data Applications: Ad Tracking
- How are all these products free?
    - Facebook / Twitter / LinkedIn
    - Google
    - Youtube / Soundcloud
- Goal: Covert an ad seen on screen to some action
- The better targeted the ad, the better chance of a conversion ($$$)

### Data Applications: Search
- Improve results
    -   Did the user click a link?
        - Was it the top result?
    -  Did the user need to write another query?
- Predictive suggestions
- Pagerank
- Natural language processing

### Data Applications: Recommendations
- "Based on ___ you liked"
- Given previous action, provide most likely next step for user
- Given someones social graoh, they may be more likely to engage with a recommendation
- Ad targeting is recommendation
- Collaborative filtering

### Data Applications: Drive a metric
- Optimize a webpage's behavior for something that can be measured
- Iteraticve UI improvements
- Examples
    - Email client: decrease time to reply to emails
    - Increases engagement with a feature that generates more user data
    - Increase behavior that fits more profitable business model
- A/B testing

### Lots of Sensitive Information
- Personally identifiable information (PII)
    - Name, address, phone, email
    - Demographics: age, gender, race
    - Past contributions, purchases, rentals, friends, ...
- Financial information
    - Credit cards
    - Bank accounts
- Legally sensitive
    - Health information (HIPPA)
    - Student information (FERPA)
    - Information from children (COPPA)

    ### Privacy Policy
- Statement saying what the web site does with any information it collects
    - Or otherwise obtains from the user
    - And why the web site needs this information
- Generally considered legally binding
    - Must obey the laws of the land
    - Different lands have different laws
- Written in dense legal language
- Users may or may not pay attention

### The Role of a Privacy Policy
- Delineate what types of information are collected
    - Whether that information is used immediately or saved
- Specify why the information is needed
    - Not always done
    - Useful if the application is not obvious
- Specify who owns the information
    - If you own your information, company can’t use it freely
    - If they own the information things are more flexible
- Specify what an application can do with the information
    - Use in the application only
    - Use in the application and the owning company
    - Use in the application, owning company, affiliates
    - Share (sell to) with related businesses
    - Share (sell to) with anyone
- Specify which controls you have over the information
    - Can you stop it from being collected
    - an you request any collected information be discarded

### Developer - Legal Responsibility
- Privacy has legal implications            
    - Already covered by laws in many places
    - Already covered by laws in many domains
    - European law is generally much stricter than US
    - China has a policy of censorship
- Developer is responsible for breaches of 
    - You need to use “best efforts” to avoid them
    - Implications can be large
        - Fines, imprisonment
        - Cost to protect the consumer
        - Cost related to the breach

### GDPR
- General Data Protection Regulation
- Protects citizens of the European Union
    - Any service with EU users must comply
    - Web is global
- Users must provide consent
    - Services must define how data will be used
    - Can’t collect data for one purpose, then use later for another
- Must collect minimum amount of data to achieve stated purpose
    - Don’t need someone’s age to add them to a newsletter
- Consumers may view all data collected about them
- Consumers have the right to be “forgotten”

### CCPA
- California Consumer Privacy Act
    - Any service with CA users must comply
- Similar to, less strict than GDPR
    - Opt out vs. Consent (Opt-in)
    - "Do not sell my personal data"