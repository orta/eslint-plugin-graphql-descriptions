/**
 * @fileoverview Describing Types
 * @author Orta Therox
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "Describing Types",
            category: "Fill me in",
            recommended: false
        },
        fixable: null,  // or "code" or "whitespace"
        schema: [
            
        ]
    },

    create: function(context) {
        return {
            "NewExpression": (node) => {
                // Is it `new GraphQLObjectType` ?
                if (node.callee.type !== "Identifier" || node.callee.name !=="GraphQLObjectType") {
                    return
                }

                // Does the object passed into it have a description property?
                if (node.arguments[0]) {
                    var properties = node.arguments[0].properties
                    var descProp = properties.filter(prop => prop.key.name === "description")
                    if (descProp.length == 0) {
                        context.report(node.callee, "No description was found on this GraphQLObjectType.");
                    }
                }
            }
        };
    }
};
