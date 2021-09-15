using System.Collections.Generic;
using System.Linq;
using emergent_assessment.Models;
using emergent_assessment.Services;
using Microsoft.AspNetCore.Mvc;

namespace emergent_assessment.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class SoftwareController : ControllerBase
    {
        private readonly SoftwareService _softwareService;
        public SoftwareController(SoftwareService softwareService)
        {
            this._softwareService = softwareService;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Software>> GetAllSoftware()
        {
            var allSoftware = this._softwareService.GetAllSoftware();
            return Ok(allSoftware);
        }

        [HttpGet("{name}")]
        public ActionResult<IEnumerable<Software>> GetSoftwareByName([FromRoute] string name)
        {
            var filteredSoftware = this._softwareService.GetSoftwareByName(name);
            if (filteredSoftware.Count() == 0)
            {
                return NotFound();
            }
            return Ok(filteredSoftware);
        }
    }
}