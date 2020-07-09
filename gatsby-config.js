module.exports = {
    plugins:[
        {
            resolve: `gatsby-source-graphql`,
            options: {
                typeName : `GraphCMS`,
                fieldName: `gcms`,
                url: `....her url endpoint`,
                    
            },

        },  
    
    ],
};
