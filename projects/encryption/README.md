# Encryption Activity Reflection

## Part 1: Key Exchange

My Key: 3
My Partner's Key: 5

Our initial shared key: 8

## Part 2: Messaging

Complete this table with each of your messages. This should 
include the entire conversation - the messages that you sent
and the messages that you received.

(If you used something other than the caesar cipher here, describe what you did)                                                                                                                                                   
|Pq               |Hi               |  8  |
|Mjqqt            |Hello            |  5  |
|Dmu wpc wms      |How are you      |  22 |
|Csff             |Good             |  21 |


## Part 3: Connection to TCP/IP Model

### Application Layer: Turn your message into binary

Everything we've done in this activity takes place in the application layer. By the time the message leaves the application
layer, it is encoded in binary. We've been working with text for this activity for convenience, but let's see what the binary
looks like.

Go back to the first encrypted message that you sent (it should be in `rsa_encryption_activity/send/encrypted_message.b64`).

This message is represented as a string of letters, numbers, and symbols. But we know that the real message is in binary.

Select the first six characters from this message and copy them here:

Using the ASCII table, convert these five characters to binary (if necessary,
include leading zeroes so that each character is 8 bits): 

### Transport Layer: Break your message into packets

Assume that each packet can hold two bytes. Fill in the packet information below with the binary values you computed above.

    =========
    Packet 1:

    Source: [Your Name]
    Destination: [Partner's Name]  
    Sequence: 1/3
    Data: [binary for char 1] [binary for char 2]
    =========
    Packet 2:

1055322@1055322-student-FVFMQARN1WFV README.md % >....                                                                                                                                                      
| Encoded Message | Decoded Message | Key |
| --------------- | --------------- | --- |
|Pq               |Hi               |  8  |
|Mjqqt            |Hello            |  5  |
|Dmu wpc wms      |How are you      |  22 |
|Csff             |Good             |  21 |


## Part 3: Connection to TCP/IP Model

### Application Layer: Turn your message into binary        

Everything we've done in this activity takes place in the application layer. By the time the message leaves the application
layer, it is encoded in binary. We've been working with text for this activity for convenience, but let's see what the binary
looks like.                                                                     

Go back to the first encrypted message that you sent (it should be in `rsa_encryption_activity/send/encrypted_message.b64`).

This message is represented as a string of letters, numbers, and symbols. But we know that the real message is in binary.

Select the first six characters from this message and copy them here:OFrilf

Using the ASCII table, convert these five characters to binary (if necessary,
include leading zeroes so that each character is 8 bits):        

### Transport Layer: Break your message into packets

Assume that each packet can hold two bytes. Fill in the packet information below with the binary values you computed above.

    =========                                                                                                                
    Packet 1:

    Source: [Yared]                                                                                                         
    Destination: [Oscar]         
    Sequence: 1/3                                                                                                        
    Data: [00110000] [01000110]         
    =========                                                               
    Packet 2:

    Source: [Yared]                                                
    Destination: [Oscar]         
    Sequence: 2/3                                   
    Data: [01110010] [01101001]         
    =========                                                                                                              
    Packet 3:
    
    Source: [Yared]    
    Destination: [Oscar]         
    Sequence: 3/3      
    Data: [01101100] [01100110]         
    =========    
    
## Part 4: Reflection Questions
    
- What is the difference between symmetric and asymmetric encryption? What purpose did each serve in this simulation? - Symmetric encryption uses the same secret key for both sides, but asymmetric encryption uses a pair of keys- one public, and one private. The public key encrypts and the private key decrypts. Symmetric encryption was the caesar cipher, and we used a script to make a public and private key to decode our original keys. 
- Why is it important that this protocol uses a new key for each message? - Even if one key is decrypted they can't decrypt future or past messages.  
- Why is it important that you never share your secret key? Sharing your secret key means other people can decrypt your messages. 
- In the transport layer, do these messages use TCP or UDP? Why? - It uses TCP to make sure the message was properly delivered. 
- Now that you've created packets in the transport layer, give a short explanation of what happens to these packets in the internet layer and in the link layer. - In the internet layer, they get a source and destination ip address and are routed to their destination. In the link layer moves the packet accross the network. 
- This protocol successfully encrypts the **content** of the message. Even though and adversary in the middle can't read the content of the message, what other
information can they still see? - Who I sent it to, when I sent it, and how frequently I sent it.          