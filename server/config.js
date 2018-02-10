process.env.MAIL_URL = "smtp://postmaster%40sandbox1ac643933cac40d0a72c3a3fd34be812.mailgun.org:d3b263b85137a7b4fce4c890021135fd@smtp.mailgun.org:587";

FlowRouter.setDeferScriptLoading(true);

// We cache SSR pages for 10 minutes.
const TEN_MINUTES = 1000 * 60 * 10;
FlowRouter.setPageCacheTimeout(TEN_MINUTES);
