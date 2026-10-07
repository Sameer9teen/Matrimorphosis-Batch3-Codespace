Concept 1: Data Binding
ng g c features/rides/components/ride-booking 
ng g c features/home/pages/home --standalone

Parent- child component or reusing component:
===================================
ride-selection = parent component
ride-option-card = reusable child component

ng g c features/rides/components/ride-selection --standalone
ng g c features/rides/components/ride-option-card --standalone



Concept 4: Structural Directives:

Directive: Manipulating/adding/removing dom element
Built-in directive
a) structural directive - control structures - @for(parameters){}, @switch{}, @if

earlier version =>*ngFor *ngSwitch *ngIf
explore the syntax of earlier version


b) attribute directive
c) component directive

Custom directive

=================================
creating component for built-in directive

ng g c features/rides/components/nearby-drivers
applied this in nearby drivers component. 


Create custom dirctive: 
ng g d features/shared/directives/surege-highlight
ng generate directive features/shared/directives/surege-highlight
CREATE src/app/features/shared/directives/surege-highlight.spec.ts (232 bytes)
CREATE src/app/features/shared/directives/surege-highlight.ts (161 bytes)


Concept 5: Pipes + async pipes

Built-in pipe:
uppercase
lowercase
titlecase
currency
date



ng g c features/rides/components/fare-summary --standalone

Custom pipe: user-defined pipes
ng g p features/shared/pipes/surge-level



Concept 6: Bootstrap integration
npm install bootstrap
angular.json - "styles": [
   "node_modules/bootstrap/dist/css/bootstrap.min.css",
  "src/styles.css"
]

ng g c features/dashboard/components/service-dashboard

key terms in bootstrap:
----------------------
p = padding
m = margin

t = top
b = bottom
s = start
e = end
x = left + right
y = top + bottom

Concept 7: Routing:
Create Navbar component. do routing appropriately
ng g c features/shared/components/navbar --standalone
Navbar should appear all the time. so keep it permenantly in app component
This is the time to explain SPA & Payload:
Press F12 on the browser. it will open network tab

In traditional websites:

Network tab keeps getting:
document
document
document
on every navigation

In Angular SPA:

Only initial load has:
document
After that:

nothing.

That is the strongest proof.