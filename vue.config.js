module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: `
                    @import "@/assets/styles/scss/eden-whitepaper.scss";
                `,
            },
        },
    },
};