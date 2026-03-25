"use client";

import * as React from "react";
import { PlasmicHomepage } from "../components/plasmic/plasmic_test_app/PlasmicHomepage";

export function ClientHomepage(props: React.ComponentProps<typeof PlasmicHomepage>) {
  return <PlasmicHomepage {...props} />;
}
