using System.Web.Optimization;

namespace SenkoUmbraco.App_Start
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            //Scripts
            bundles.Add(new ScriptBundle("~/bundles/topJS").Include(
                "~/scripts/jquery.js",
                "~/scripts/jquery.easing.1.3.js",
                "~/scripts/jwplayer.js"
            ));
            bundles.Add(new ScriptBundle("~/bundles/botJS").Include(
                "~/scripts/bootstrap.min.js",
                "~/scripts/jquery.panel.mobile.js",
                "~/scripts/owl.carousel.min.js",
                "~/scripts/jquery.fancybox.pack.js",
                "~/scripts/jquery.lazyload.min.js",
                "~/scripts/jquery.main.js"
            ));
            //CSS
            bundles.Add(new StyleBundle("~/bundles/style").Include(
                "~/css/bootstrap.min.css",
                "~/css/font-awesome.min.css",
                "~/css/owl.carousel.min.css",
                "~/css/jquery.fancybox.css",
                "~/css/fonts.css",
                "~/css/site.css",
                "~/css/site-respon.css"
            ));

            BundleTable.EnableOptimizations = true;
        }
    }
}