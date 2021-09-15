using System.Collections.Generic;
using API.Models;
using API.Repositories;

namespace API.Services
{
    public class SoftwareService
    {
        private readonly SoftwareRepository _softwareRepository;
        public SoftwareService(SoftwareRepository softwareRepository)
        {
            this._softwareRepository = softwareRepository;
        }

        public IEnumerable<Software> GetAllSoftware()
        {
            /**
            * Here's where we'd put random business logic.
            */
            return this._softwareRepository.GetAllSoftware();
        }

        public IEnumerable<Software> GetSoftwareByName(string name)
        {
            return this._softwareRepository.GetSoftwareByName(name);
        }
    }
}