using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ConsultaCalificacioensReact.Models;

namespace ConsultaCalificacioensReact.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AlumnosController : Controller
    {
        private readonly ReactAlumnosContext _dbcontext;

        public AlumnosController(ReactAlumnosContext context)
        {
            _dbcontext = context;
        }

        [HttpGet]
        [Route("ObtenerAlumno")]
        public IActionResult ObtenerEmpleado()
        {
            List<Alumno> lista = _dbcontext.Alumnos.ToList();

            return StatusCode(StatusCodes.Status200OK, lista);
        }
    }
}
