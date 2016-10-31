using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace iGame.WebApp.Controllers
{
    public class ToolsController : Controller
    {
        // 宠物档位模拟器
        public ActionResult Simulation()
        {
            return View();
        }

        // 宠物算档器
        public ActionResult Analyzer()
        {
            return View();
        }

        // 装备模拟器
        public ActionResult EQsimulator()
        {
            return View();
        }
    }
}