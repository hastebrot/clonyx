package helper

import (
	"io"
	"strings"

	g "github.com/maragudk/gomponents"
	. "github.com/maragudk/gomponents/html"
)

func Classes(nodes ...g.Node) g.Node {
	var classes []string
	for _, node := range nodes {
		if node != nil {
			var builder strings.Builder
			_ = node.Render(&builder)
			c := builder.String()
			c = strings.TrimPrefix(c, " class=\"")
			c = strings.TrimSuffix(c, "\"")
			classes = append(classes, c)
		}
	}
	return Class(strings.Join(classes, " "))
}

func IfElse(condition bool, node g.Node, elseNode g.Node) g.Node {
	if condition {
		return node
	}
	return elseNode
}

func IfLazy(condition bool, node func() g.Node) g.Node {
	if condition {
		return node()
	}
	return nil
}

func Lazy(cb func() g.Node, nodeType ...g.NodeType) g.Node {
	if cb == nil {
		panic("lazy callback cannot be nil")
	}

	switch len(nodeType) {
	case 0:
		return &lazy{CB: cb}
	case 1:
		return &lazy{CB: cb, T: nodeType[0]}
	default:
		panic("lazy only accepts one node type")
	}
}

type lazy struct {
	CB func() g.Node
	T  g.NodeType
}

func (l *lazy) Render(w io.Writer) error {
	return l.CB().Render(w)
}

func (l *lazy) Type() g.NodeType {
	return l.T
}

func Ref[T any](value T) *T {
	return &value
}

func StringDeref(ref *string) string {
	if ref != nil {
		return *ref
	}
	return ""
}

func BoolDeref(ref *bool) bool {
	if ref != nil {
		return *ref
	}
	return false
}

func IntDeref(ref *int) int {
	if ref != nil {
		return *ref
	}
	return 0
}

func Iter(n int) []int {
	array := make([]int, n)
	for i := range array {
		array[i] = i
	}
	return array
}
