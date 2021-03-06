using System.Collections.Generic;
using API.Models;
using System.Linq;
using System;

namespace API.Repositories
{
    public class SoftwareRepository
    {
        public IEnumerable<Software> GetAllSoftware()
        {
            return new List<Software>
            {
                new Software
                {
                    Name = "MS Word",
                    Version = "13.2.1"
                },
                new Software
                {
                    Name = "AngularJS",
                    Version = "1.7.1"
                },
                new Software
                {
                    Name = "Angular",
                    Version = "8.1.13"
                },
                new Software
                {
                    Name = "React",
                    Version = "0.0.5"
                },
                new Software
                {
                    Name = "Vue.js",
                    Version = "2.6"
                },
                new Software
                {
                    Name = "Visual Studio",
                    Version = "2017.0.1"
                },
                new Software
                {
                    Name = "Visual Studio",
                    Version = "2019.1"
                },
                new Software
                {
                    Name = "Visual Studio Code",
                    Version = "1.35"
                },
                new Software
                {
                    Name = "Blazor",
                    Version = "0.7"
                }
            };
        }

        public IEnumerable<Software> GetSoftwareByName(string name)
        {
            return this.GetAllSoftware().Where(soft => soft.Name.ToLower() == name.ToLower());
        }

        public IEnumerable<Software> GetSoftwareByVersion(Func<string, bool> callback)
        {
            return this.GetAllSoftware().Where(soft => callback(soft.Version));
        }
    }
}