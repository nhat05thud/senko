using System.Web.Optimization;
using SenkoUmbraco.App_Start;
using Umbraco.Core;

namespace SenkoUmbraco.App_Code
{
    public class Bootstrapper : ApplicationEventHandler
    {
        protected override void ApplicationStarting(UmbracoApplicationBase umbracoApplication, ApplicationContext applicationContext)
        {
            BundleConfig.RegisterBundles(BundleTable.Bundles);
            base.ApplicationStarting(umbracoApplication, applicationContext);
        }
    }
}