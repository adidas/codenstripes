export default ({ router }) => {
  if (typeof window !== 'undefined') {
    (function(i,s,o,g,r,a,m){i['InstanaEumObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://eum.instana.io/eum.min.js','ineum');
    ineum('reportingUrl', 'https://eum-eu-west-1.instana.io');
    ineum('key', process.env.INSTANA_EUM_KEY);
    ineum('meta', 'environment', process.env.NODE_ENV);

    router.beforeEach((to, from, next) => {
      ineum('page', window.location.pathname);
      ineum('startSpaPageTransition');

      next();
    });

    router.afterEach(() => {
      ineum('endSpaPageTransition', {
        url: window.location.pathname,
        status: 'completed'
      });
    });

    router.onError((error) => {
      ineum('endSpaPageTransition', {
        url: window.location.pathname,
        status: 'error',
        explanation: error.toString()
      });
    });
  }
}