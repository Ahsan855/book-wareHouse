import React from "react";

const Blog = () => {
  return (
    <div className="p-20 mt-10 text-left">
      <div className="p-5 grid gap-4 md:grid-cols-2 sm:grid-cols-1">
        <div className="border-2 border-blue-300 rounded-lg p-4">
            <h2 className="text-blue-500 text-center mb-5">Difference between javascript and nodejs?</h2>
            <h4>nodejs</h4>
            <p>NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development.</p>
            <h4>javascript</h4>
            <p>Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance. </p>
        </div>
        <div className="border-2 border-blue-300 rounded-lg p-4">
            <h3 className="text-blue-500 text-center mb-5">When should you use nodejs and when should you use mongodb?</h3>
            <p>Since mongo db runs on javscript engine one can easily connect Mongo db with a node application. The best way to access mongo Db is using mongoose (ODM tool).MongoDB represents the data as a collection of documents rather than tables related by foreign keys. This makes it possible for the varied types of data dealt over the internet to be stored decently and accessed in the web applications using Node. js.</p>
        </div>
      </div>
      <div className="p-5 grid gap-4 md:grid-cols-2 sm:grid-cols-1">
        <div className="border-2 border-blue-300 rounded-lg p-4">
            <h2 className="text-blue-500 text-center">Differences between sql and nosql databases?</h2>
            <p>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>
        </div>
        <div className="border-2 border-blue-300 rounded-lg p-4">
            <h2 className="text-blue-500 text-center">What is the purpose of jwt and how does it work?</h2>
            <p>JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
