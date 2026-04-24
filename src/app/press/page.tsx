import { PageShell } from '@/components/shared/page-shell'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

const assets = [
  { title: 'Logo Pack', description: 'Brand logos in PNG/SVG format for editorial use.', type: 'ZIP' },
  { title: 'Product Screens', description: 'Updated product visuals and publishing workflow screenshots.', type: 'ZIP' },
  { title: 'Brand Guidelines', description: 'Color, typography, and usage documentation.', type: 'PDF' },
]

const coverage = [
  { outlet: 'Tech Daily', headline: 'bestprnews24.com expands release distribution tools', date: 'Apr 18, 2026' },
  { outlet: 'Startup Journal', headline: 'How teams are launching stories faster with media-first publishing', date: 'Apr 12, 2026' },
  { outlet: 'Growth Wire', headline: 'Distribution and analytics in one release workflow', date: 'Apr 05, 2026' },
]

export default function PressPage() {
  return (
    <PageShell
      title="Press"
      description="Media resources, brand assets, and press coverage."
    >
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Card className="border-border bg-card">
          <CardContent className="p-6 space-y-3">
            <h2 className="text-lg font-semibold text-foreground">Press Kit</h2>
            <p className="text-sm text-muted-foreground">
              Download logos, product screenshots, and brand guidelines for media use.
            </p>
            <div className="grid gap-2">
              {assets.map((asset) => (
                <div key={asset.title} className="rounded-lg border border-border bg-secondary/40 px-4 py-3">
                  <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                    <div>
                      <p className="text-sm font-medium text-foreground">{asset.title}</p>
                      <p className="text-xs text-muted-foreground">{asset.description}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="rounded-full border border-border px-3 py-1 text-xs">{asset.type}</span>
                      <Button size="sm">Download</Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <div className="space-y-4">
          {coverage.map((item) => (
            <Card key={item.headline} className="border-border bg-card transition-transform hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="text-xs uppercase tracking-wide text-muted-foreground">{item.outlet}</div>
                <p className="mt-2 text-sm text-foreground">{item.headline}</p>
                <p className="mt-2 text-xs text-muted-foreground">{item.date}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </PageShell>
  )
}
