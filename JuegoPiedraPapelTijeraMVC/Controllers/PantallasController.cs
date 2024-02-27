using Microsoft.AspNetCore.Mvc;

namespace JuegoPiedraPapelTijeraMVC.Controllers
{
    public class PantallasController : Controller
    {
        public IActionResult Juego()
        {
            return View();
        }

        public IActionResult Ganador(string ganador)
        {
            ViewData["Ganador"] = ganador;
            return View();
        }
    }
}
