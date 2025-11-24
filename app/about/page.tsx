"use client";

import React from "react";
import WorkshopLayout from "@/components/Layout/WorkshopLayout";
import Slide from "@/components/Teaching/Slide";
import { Users, MapPin, Calendar, Code, Laptop } from "lucide-react";

export default function AboutPage() {
  return (
    <WorkshopLayout
      currentPath="/about"
      title="About This Workshop"
    >
      <div className="max-w-4xl mx-auto">
        {/* Intro */}
        <Slide title="About This Workshop">
          <p className="mb-6 text-lg">
            This interactive platform is designed to teach Git & GitHub to B.Tech students at SCRIET. 
            It replaces boring PPTs with hands-on learning, real-time terminals, and practical exercises.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white border border-slate-200 rounded-xl shadow-sm">
              <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Users className="text-blue-500" /> Target Audience
              </h3>
              <p className="text-slate-600 text-sm">
                B.Tech students (CS, IT, EI) who want to move beyond "saving files on desktop" and start building professional software.
              </p>
            </div>
            <div className="p-6 bg-white border border-slate-200 rounded-xl shadow-sm">
              <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Laptop className="text-purple-500" /> The Goal
              </h3>
              <p className="text-slate-600 text-sm">
                By the end of this workshop, you will have a professional GitHub profile, your first open source contribution, and the skills to work in any dev team.
              </p>
            </div>
          </div>
        </Slide>

        {/* Details */}
        <Slide title="Workshop Details">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-center">
              <MapPin className="mx-auto text-red-500 mb-2" />
              <h4 className="font-bold text-slate-900">Venue</h4>
              <p className="text-sm text-slate-600">ATAL SABHAGAR</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-center">
              <Calendar className="mx-auto text-blue-500 mb-2" />
              <h4 className="font-bold text-slate-900">Duration</h4>
              <p className="text-sm text-slate-600">3-4 Days</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-center">
              <Code className="mx-auto text-green-500 mb-2" />
              <h4 className="font-bold text-slate-900">Format</h4>
              <p className="text-sm text-slate-600">Hands-on Coding</p>
            </div>
          </div>
        </Slide>

        {/* Organizers */}
        <Slide title="The Team">
          <p className="mb-6">
            Built with ❤️ by students, for students.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { name: "Lakshya Pandey", role: "B.Tech IT", icon: "👨‍💻" },
              { name: "Jayesh Gaur", role: "B.Tech CS", icon: "👨‍💻" },
              { name: "Utsav Dubey", role: "B.Tech CS", icon: "👨‍💻" },
              { name: "Keshari Nandan", role: "B.Tech EI", icon: "👨‍💻" },
            ].map((person, idx) => (
              <div key={idx} className="flex items-center gap-4 p-4 bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-2xl">
                  {person.icon}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{person.name}</h4>
                  <p className="text-xs text-slate-500">{person.role}</p>
                </div>
              </div>
            ))}
          </div>
        </Slide>

        {/* Tech Stack */}
        <Slide title="Under the Hood">
          <p className="mb-4 text-sm text-slate-600">
            Curious developers might want to know what this website is made of:
          </p>
          <div className="flex flex-wrap gap-2">
            {["Next.js 14", "TypeScript", "Tailwind CSS", "xterm.js", "Monaco Editor", "Lucide Icons"].map((tech, idx) => (
              <span key={idx} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-bold border border-slate-200">
                {tech}
              </span>
            ))}
          </div>
        </Slide>
      </div>
    </WorkshopLayout>
  );
}
