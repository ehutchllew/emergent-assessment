using System;
using System.Collections.Generic;
using System.Linq;
using API.Models;
using API.Services;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
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
        public ActionResult<IEnumerable<Software>> GetAllSoftware([FromQuery] string version, [FromQuery] string name)
        {
            var allSoftware = this._softwareService.GetAllSoftware(version, name);
            return Ok(allSoftware);
        }
    }
}