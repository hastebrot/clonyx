package onyx_button

import (
	"github.com/hastebrot/gomponents-lucide/lucide"
	g "github.com/maragudk/gomponents"
	. "github.com/maragudk/gomponents/html"

	. "onyx-htmx/helper"
)

func OnyxButtonStory() g.Node {
	return Div(Classes(
		Class("p-4 grid items-start"),
		Class("font-sans text-[14px] leading-[20px] text-gray-900 bg-gray-200"),
	),
		Div(Class("flex items-center gap-1"),
			g.Text("button"),
			Div(
				lucide.ChevronDown(Class("h-[15px] w-[15px]")),
			),
		),
	)
}
