"use client"

import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from 'next/link';

export default function SocialMedias() {
  return (
    <ul className="ml-1 mt-14 flex items-center">
            <li className="mr-5 text-xs">
                <Link className="block text-slate-400 hover:text-slate-200" href="https://github.com/bchiang7" target="_blank" rel="noreferrer">
                    <span className="sr-only">GitHub</span>
                    <GitHubIcon fontSize='medium' />
                </Link>
            </li>
            <li className="mr-5 text-xs">
                <Link className="block text-slate-400 hover:text-slate-200" href="https://instagram.com/bchiang7" target="_blank" rel="noreferrer">
                    <span className="sr-only">Instagram</span>
                    <InstagramIcon fontSize='medium' />
                </Link>
            </li>
            <li className="mr-5 text-xs">
                <Link className="block text-slate-400 hover:text-slate-200" href="https://twitter.com/bchiang7" target="_blank" rel="noreferrer">
                    <span class="sr-only">Facebook</span>
                    <FacebookIcon fontSize='medium' />
                </Link>
            </li>
            <li className="mr-5 text-xs">
                <Link className="block text-slate-400 hover:text-slate-200" href="https://www.linkedin.com/in/bchiang7/" target="_blank" rel="noreferrer">
                    <span className="sr-only">LinkedIn</span>
                    <LinkedInIcon fontSize='medium' />
                </Link>
            </li>
        </ul>
  )
}
