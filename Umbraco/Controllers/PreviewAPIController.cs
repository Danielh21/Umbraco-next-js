using Microsoft.AspNetCore.Mvc;
using Polly;
using Umbraco.Cms.Core;
using Umbraco.Cms.Core.Web;
using Umbraco.Cms.Web.Common.Controllers;

namespace Umbraco.Controllers
{
    public class PreviewAPIController : UmbracoApiController
    {

        IUmbracoContextFactory _umbracoContextFactory;

        public PreviewAPIController(IUmbracoContextFactory umbracoContextFactory)
        {
            _umbracoContextFactory = umbracoContextFactory;
        }


        [HttpGet]
        [Route("umbraco/preview")]
        public IActionResult Preview()
        {

            using (UmbracoContextReference context = _umbracoContextFactory.EnsureUmbracoContext())
            {
                var id = HttpContext.Request.Query["id"];
                var Page = context.UmbracoContext.Content.GetById(int.Parse(id));
                var url = Page.Url();
                return Redirect($"http://localhost:3009{url}?preview=true");
            }
        }

    }
}
