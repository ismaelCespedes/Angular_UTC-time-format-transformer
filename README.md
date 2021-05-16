# UTCFormatTimeTransformerAngularClient
Angular client that serves as an interface to a service that transforms a time to UTC format. It receives as parameters one hour and its time zone. The response from the service is a document in json format that contains the time transformed to UTC. 

# Used components:
-node version 12.14.1 </br>
-npm version 6.13.4 </br>

# Instructions for use:
<p>Download dependencies using the <strong>npm install</strong> command.</p>
<p>Deploy the project using the <strong>ng serve</strong> command.</p>
Once the project is deployed, a form will be shown where you must enter the time in format HH: mm: ss 
<p>Example: <strong>15:40:12</strong></p>
And you must enter the time zone that is composed of a sign (+ / -) and the displacement time of the time zone, the supported formats are (+/-) HH:mm or H:m or H</br>
<p>
Examples: <strong>-4 </strong>, <strong>-04:30 </strong>, <strong>-4:30 </strong> 
<p/>  
This service is published in the Url: https://utc-transformer.vercel.app/
