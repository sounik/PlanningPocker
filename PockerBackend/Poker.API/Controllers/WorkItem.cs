using Microsoft.AspNetCore.Mvc;

namespace Poker.API.Controllers
{
    public class WorkItem : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
