Que.1  Role of Frontend (FE)
Ans- The Frontend (FE), often called the client-side, is the part of the web application that runs in the user's browser. It is the intersection where design meets logic, acting as the bridge between the human user and the server's data. Its role is comprehensive, covering everything the user sees, touches, and experiences.

1. User Interface (UI)
The User Interface is the visual presentation of the application. The frontend developer's goal here is to translate design mockups into working code.
Structure and Layout: Using HTML (HyperText Markup Language), the frontend defines the structure of the page—organizing headers, paragraphs, images, and data tables.
Styling and Aesthetics: Using CSS (Cascading Style Sheets), the frontend controls the look and feel. This includes color schemes, typography, spacing, and animations.
Responsiveness: A critical role of the FE is ensuring the application looks good on all devices. Whether a user is on a large desktop monitor or a small smartphone screen, the layout must adapt (using techniques like Media Queries or Flexbox) so content remains readable and accessible.
Accessibility: The FE ensures the site is usable by people with disabilities, such as adding screen-reader support and ensuring proper color contrast.

2. User Interaction
Beyond just looking good, the frontend must be interactive. This is where JavaScript plays a major role.
Event Handling: The frontend listens for specific user actions—clicks, scrolls, key presses, or mouse movements. For example, when a user clicks Add to Cart, the frontend detects that click and triggers an animation to fly the item into the cart icon.
Input Validation: Before sending data to the server, the frontend performs an initial check. If a user tries to submit an email form without an @ symbol, the frontend instantly shows an error message. This provides immediate feedback and reduces load on the server.
State Management: In modern applications (like those built with React or Vue), the frontend keeps track of the state of the app—is the user logged in? Is the loading spinner visible? Is the dark mode toggled on? The interface updates automatically whenever this state changes.

3. Communication with Backend
The frontend is the requester in the web ecosystem. It does not permanently store the application's core data; instead, it fetches it from the backend.
API Calls: The frontend communicates with the backend via APIs (Application Programming Interfaces), typically using HTTP requests.
GET: To retrieve data (e.g., loading a list of products).
POST: To send new data (e.g., submitting a login form).
Asynchronous Operations: The frontend handles these requests asynchronously. This means that while the app is waiting for the server to reply (which might take a second), the user can still scroll and interact with the page, preventing the app from freezing.
Data Presentation: Once the backend sends the raw data (usually in JSON format), the frontend parses it and renders it into human-readable HTML on the screen.
