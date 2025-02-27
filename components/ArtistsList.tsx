import Image from "next/image";
import Link from "next/link";

import ArtistsCarousel from "./ArtistsCarousel";
import Highlighter, { HighlighterItem } from "./Highlighter";
import Particles from "./Particles";

import { cn } from "@/lib/utils";
import type { ReferenceItem } from "@/sanity/types/ReferencesPage";
import { buttonVariants } from "./ui/button";

export default function ArtistsList({
  referencesList,
}: { referencesList: ReferenceItem[] }) {
  const firstBlockArtists = referencesList.slice(0, 2);
  const secondBlockArtists = referencesList.slice(2, 5);

  const nextArtists = referencesList.slice(5);
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div>
          <div className="relative pb-6 md:pb-10">
            {/* Blurred shape */}
            <div
              className="-mb-20 -translate-x-1/2 pointer-events-none absolute bottom-0 left-1/2 opacity-50 blur-2xl"
              aria-hidden="true"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
                <title>Blurred shape</title>
                <defs>
                  <linearGradient
                    id="bs2-a"
                    x1="19.609%"
                    x2="50%"
                    y1="14.544%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#f3a710" />
                    <stop offset="100%" stopColor="#fce98b" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  fill="url(#bs2-a)"
                  fillRule="evenodd"
                  d="m346 898 461 369-284 58z"
                  transform="translate(-346 -898)"
                />
              </svg>
            </div>
            <Highlighter className="grid gap-6 md:grid-cols-12">
              {/* Box #1 and 2 */}
              {firstBlockArtists.map(({ _key, artistName, image, link }) => (
                <div
                  key={_key}
                  className="md:col-span-6"
                  data-aos="fade-down"
                  data-aos-delay="100"
                >
                  <HighlighterItem>
                    <div className="relative z-20 grid aspect-square w-full grow place-items-center overflow-hidden rounded-[inherit]">
                      <Image
                        src={image.url}
                        alt={image?.altText || ""}
                        fill
                        style={{
                          objectFit: "cover",
                        }}
                      />
                      <Particles
                        className="-z-10 absolute inset-0 opacity-0 transition-opacity duration-500 ease-in-out group-hover/slide:opacity-100"
                        quantity={5}
                      />
                      <p className="relative mb-1 inline-block bg-gradient-to-r from-buttercup-500 to-buttercup-200 bg-clip-text text-center font-bold text-lg text-transparent underline">
                        {artistName}
                      </p>
                      <div className="group/arrow absolute right-5 bottom-5 md:right-8 md:bottom-6">
                        <div className="relative inline-flex before:absolute before:inset-0 before:bg-buttercup-500 before:blur-md">
                          <Link
                            href={link}
                            target="_blank"
                            className={cn(
                              buttonVariants({ size: "sm" }),
                              "group relative z-30 shadow [background:linear-gradient(theme(colors.buttercup.500),_theme(colors.buttercup.500))_padding-box,_linear-gradient(theme(colors.buttercup.500),_theme(colors.buttercup.200)_75%,_theme(colors.transparent)_100%)_border-box] before:pointer-events-none before:absolute before:inset-0 before:rounded-full before:bg-buttercup-600/70",
                            )}
                          >
                            <span className="relative inline-flex items-center">
                              Découvrir{" "}
                              <span className="ml-1 text-buttercup-50 tracking-normal transition-transform duration-150 ease-in-out group-hover/arrow:translate-x-1">
                                -&gt;
                              </span>
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </HighlighterItem>
                </div>
              ))}
              {/* Box #3 to 5 */}
              {secondBlockArtists.map(({ _key, artistName, image, link }) => (
                <div key={_key} className="md:col-span-4" data-aos="fade-down">
                  <HighlighterItem>
                    <div className="relative z-20 grid aspect-square w-full grow place-items-center overflow-hidden rounded-[inherit]">
                      <Image
                        src={image.url}
                        alt={image?.altText || ""}
                        fill
                        style={{
                          objectFit: "cover",
                        }}
                      />
                      <Particles
                        className="-z-10 absolute inset-0 opacity-0 transition-opacity duration-500 ease-in-out group-hover/slide:opacity-100"
                        quantity={5}
                      />
                      <p className="relative mb-1 inline-block bg-gradient-to-r from-buttercup-500 to-buttercup-200 bg-clip-text text-center font-bold text-lg text-transparent underline">
                        {artistName}
                      </p>
                      <div className="absolute right-4 bottom-4 md:right-5">
                        <div className="relative inline-flex before:absolute before:inset-0 before:bg-buttercup-500 before:blur-md">
                          <Link
                            href={link}
                            target="_blank"
                            className={cn(
                              buttonVariants({ size: "sm" }),
                              "group relative z-30 shadow [background:linear-gradient(theme(colors.buttercup.500),_theme(colors.buttercup.500))_padding-box,_linear-gradient(theme(colors.buttercup.500),_theme(colors.buttercup.200)_75%,_theme(colors.transparent)_100%)_border-box] before:pointer-events-none before:absolute before:inset-0 before:rounded-full before:bg-buttercup-600/70",
                            )}
                          >
                            <span className="relative inline-flex items-center">
                              Découvrir{" "}
                              <span className="ml-1 text-buttercup-50 tracking-normal transition-transform duration-150 ease-in-out group-hover:translate-x-1">
                                -&gt;
                              </span>
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </HighlighterItem>
                </div>
              ))}
            </Highlighter>
          </div>
        </div>
        {/* Box #6 to [...] */}
        <ArtistsCarousel nextArtists={nextArtists} />
      </div>
    </section>
  );
}
