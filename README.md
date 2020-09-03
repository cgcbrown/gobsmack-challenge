# Gobsmack Challenge

## Brief

- Setup a simple Gatsby application.
- Create a component on the base route to achieve the designs provided (Sketch and PDF supplied)
- Ensure the component works responsively for Tablet and Mobile devices
- Integrate with this endpoint to receive the wallet values and first name - (GET) http://buildingbrands.co/react-test/wallet.json
- Ensure the values returned by the endpoint are stored in the components state.
- Use the font provided (ProbaPro)
- Ensure the line underneath the banner is a representation of the percentage of wallet value to wallet target.

## Outcome

I completed the challenge and fullfilled all the criteria. I decided to set the project up as if I would be adding to it in the future. I opted to use *Typescript* and *Styled Components*.

### Lessons learned

Having only just recently picked up Gatsby it was a good opportunity to put what I have learned into practice. At first I was trying to fetch the data on the clients side using the *fetch api* and *useEffect*, however I was having trouble with CORS. I later attempted Gatsbys createNode api and had immediate success.

Seeing as Gobsmack use *Styled Components* I decided to learn and apply it to this project. I am now a big fan and will definitely be applying it to all my future React projects.

### What would I do next if I had to develop it further

I would most likely design a better experience and UI for both the mobile and tablet designs. As they stand, they are functional but nothing special.

Figure out and solve the typescript error I get from importing the SVG icons using *gatsby-plugin-react-svg*.
