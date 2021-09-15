using System;
using System.Linq;
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

        public IEnumerable<Software> GetAllSoftware(string version = null, string name = null)
        {
            if (version != null) return this.GetSoftwareByVersion(version);
            if (name != null) return this.GetSoftwareByName(name);

            return this._softwareRepository.GetAllSoftware();
        }

        public IEnumerable<Software> GetSoftwareByName(string name)
        {
            return this._softwareRepository.GetSoftwareByName(name);
        }

        public IEnumerable<Software> GetSoftwareByVersion(string version = "0.0.0")
        {
            var versionList = this.ConvertVersionStringToInt(version);

            return this._softwareRepository.GetSoftwareByVersion(this.SoftwareGreaterThanVersion(versionList));
        }

        protected virtual Func<string, bool> SoftwareGreaterThanVersion(IList<int> versionList)
        {
            return (string version) =>
            {
                var softwareVersionList = this.ConvertVersionStringToInt(version);
                var verionListLength = versionList.Count();
                var softwareVersionListLength = softwareVersionList.Count();
                if (verionListLength != softwareVersionListLength)
                {
                    while (verionListLength < softwareVersionListLength)
                    {
                        versionList = versionList.Append(0).ToList();
                        verionListLength = versionList.Count();
                    }
                    while (softwareVersionListLength < verionListLength)
                    {
                        softwareVersionList = softwareVersionList.Append(0).ToList();
                        softwareVersionListLength = softwareVersionList.Count();
                    }
                }

                for (int i = 0; i < verionListLength; i++)
                {
                    var (a, b) = (versionList[i], softwareVersionList[i]);
                    if (versionList[i] < softwareVersionList[i])
                    {
                        return true;
                    }

                    if (versionList[i] > softwareVersionList[i])
                    {
                        return false;
                    }
                }
                return false;
            };
        }

        private IList<int> ConvertVersionStringToInt(string str)
        {
            return str.Split(".").Select(s => int.Parse(s)).ToList();
        }
    }
}