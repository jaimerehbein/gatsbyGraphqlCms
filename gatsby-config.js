module.exports = {
    plugins:[
        {
            resolve: `gatsby-source-graphql`,
            options: {
                typeName : `GraphCMS`,
                fieldName: `gcms`,
                url: `https://api-us-east-1.graphcms.com/v2/ckce5oe0t699j01xr9tyh6xx6/master`,
                    
            },

        },  
    
    ],
};