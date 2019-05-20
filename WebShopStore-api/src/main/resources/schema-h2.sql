CREATE TABLE USERS
        (
        id NUMBER(10) NOT NULL,
        login VARCHAR2(50) NOT NULL,
        password VARCHAR2(50) NOT NULL
        );

CREATE TABLE PRODUCTS
        (
                id NUMBER(10) NOT NULL,
                picture VARCHAR2(140) NOT NULL,
                name VARCHAR2(50) NOT NULL,
                price VARCHAR2(50) NOT NULL,
                size VARCHAR2(50) NOT NULL
        );
        
 