<?xml version="1.0" encoding="utf-8"?>
<mcd>

  <MMLdefinition id="cds_interval"  cdrole="application" arity="2">
    <title>Interval</title>
    <name>interval</name>
    <description>
      <p>
	This is the MathML constructor element for building an interval on the real line.
	While an interval can be expressed by combining relations appropriately, they
	occur here explicitly because of the frequency of their use.
      </p>
    </description>
    <discussion>
      <p>The <el>interval</el> element is used to represent simple mathematical intervals
      of the real number line.  It takes an attribute <att>closure</att>, which can take
      on any of the values <attval>open</attval>, <attval>closed</attval>,
      <attval>open-closed</attval>, or <attval>closed-open</attval>, with a default value
      of <attval>closed</attval>.</p>
      <p>A single <el>interval</el> element occuring as the second child of an
      <el>apply</el> element and preceded by one of the pre-defined n-ary operators is
      interpreted as a shorthand notation for a <el>domainofapplication</el>.  All other
      uses of an <el>interval</el> element as a child of an apply should be interpreted as
      ordinary function arguments unless otherwise dictated by the function
      definition.</p>
      <p>More general domains should be constructed using a <el>domainofapplication</el>
      element or one of the other shortcut notations described in <specref
      ref="contm_qualifiers"/>.</p>
      <p>The <el>interval</el> element expects two child elements that evaluate to real
      numbers.  <emph>or</emph> one or more <el>bvar</el> elements and a child element
      that is a <el>condition</el> defining the <el>interval</el>.</p>

      <p>The <el>interval</el> element denotes an interval on the real line with the
      values represented by its children as end points. The <att>closure</att> attribute
      is used to qualify the type of interval being represented. For example,

<eg role = "mathml"><![CDATA[<interval closure="open-closed"><ci>a</ci><ci>b</ci></interval>]]></eg>

      represents the open-closed interval often written (<var>a</var>,<var>b</var>].</p>
    </discussion>

    <classification>constructor</classification>
    <MMLattribute>
      <attname>closure</attname>
      <attvalue> closed | open | open-closed | closed-open </attvalue>
      <attdefault> closed </attdefault>
    </MMLattribute>
    <rendering>
      <ulist>
	<item><graphic role = "inline" source = "image/f4014.gif" alt = "[a, b]"/></item>
      <item><graphic role = "inline" source = "image/f4015.gif" alt = "(a, b]"/></item>
      </ulist>
    </rendering>
    <signature> [type=interval-type](algebraic,algebraic) -> interval(interval-type) </signature>
    <MMLexample><![CDATA[<interval closure="open">
  <ci>x</ci>
  <cn>1</cn>
</interval>]]></MMLexample>
        <MMLexample><![CDATA[<interval closure="open-closed">
  <cn>0</cn>
  <cn>1</cn>
</interval>]]></MMLexample>
<MMLexample><![CDATA[<interval>
  <bvar><ci>x</ci></bvar>
  <condition>
    <apply><lt/><cn>0</cn><ci>x</ci></apply>
    </condition>
</interval>]]></MMLexample>
<MMLexample><![CDATA[<apply><int/>
  <interval><cn>0</cn><cn>1</cn></interval>
  <ci type="function">f</ci>
</apply>]]></MMLexample>
      </MMLdefinition>


</mcd>
