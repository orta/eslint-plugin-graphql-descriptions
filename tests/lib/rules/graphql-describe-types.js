/**
 * @fileoverview Describing Types
 * @author Orta Therox
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/graphql-describe-types"),
    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("graphql-describe-types", rule, {

    valid: [
        {
            code: `
            var BidderType = new GraphQLObjectType({
                name: 'Bidder',
                description: 'This is my description',
                fields: function() {},
            })
            `
        }
    ],

    invalid: [
        {
            code: `
            var BidderType = new GraphQLObjectType({
                name: 'Bidder',
                fields: function() {},
            })
            `,
            errors: [{
                message: "No description was found on this GraphQLObjectType.",
                type: "Identifier"
            }]
        }
    ]
});
