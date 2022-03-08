# kitchen-around-you

```mermaid
erDiagram
    Class ||--|{ ClassDetails : oneToOne
    ClassDetails ||--|{ Ingredients : multiple
    Ingredients ||--|{ Measurments: multiple
    Users ||--|{ Registrations : multiple


    Class {
        integer id
        string title
        date day/time
        text description
        decimal fees
    }

    ClassDetails {
        integer id
        integer ingredient_id
        inetger quantity
    }

    Ingredients {
        integer id
        integer measurment_id
        string ingerdient_name
    }

    Measurments {
        integer id
        string unit 
        
    }

    Users {
        integer id
        email email
        string password
    }

    registration {
        integer id
        inetger user_id
        integer class_id
    }


```
