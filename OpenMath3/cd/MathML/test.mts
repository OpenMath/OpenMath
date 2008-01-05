<?xml version="1.0" encoding="utf-8"?>
<!-- $Id: test-cd.mcd,v 1.4 2007/09/13 14:36:38 polx Exp $ -->
<mcd id="test-cds"  revision-date="2007-09-24"
     review-date="2007-09-17" version="0.1" status="experimental"
     cdbase="http://w3.org/Math/cds">

  <title>Test CD</title>
  <description><p>Content-dictionary to test fancy features 
    and experiment with CD-presentations and cd-interoperability.</p></description>
  

  <MMLdefinition id="cds_basics_interval_oo"  cdrole="application" arity="2">
    <title>Interval</title>
    <name>interval_oo</name>
    <description>
      <p>
        This is the MathML symbol for building an interval on the real line.
        While an interval can be expressed by combining relations appropriately, they
        occur here explicitly because of the frequency of their use.
      </p>
    </description>
    <!-- TODO: legacy and canonical representations ! -->
    <discussion>
      <p>The <el>interval_oo</el> symbol is used to represent simple mathematical interval
      of the real number line not containing its two ends.</p>
      <!-- <p>The <el>interval</el> element expects two child elements that evaluate to real
      numbers.  <emph>or</emph> one or more <el>bvar</el> elements and a child element
      that is a <el>condition</el> defining the <el>interval</el>.</p> -->

      <p>The <el>interval</el> element denotes an interval on the real line with the
      values represented by its children as end points. For example,

       <eg role = "mathml"><![CDATA[<interval closure="open-open"><ci>a</ci><ci>b</ci></interval>]]></eg>
       <!-- FIXME -->

      represents the open interval of the real numbers strictly greater than <var>a</var>
        and strictly less than <var>b</var>.</p>
    </discussion>

    <classification>constructor</classification>
    
      <!-- <item><graphic role = "inline" source = "image/f4014.gif" alt = "[a, b]"/></item>
      <item><graphic role = "inline" source = "image/f4015.gif" alt = "(a, b]"/></item>-->
      <notation xmlns="http://www.w3.org/1998/Math/MathML" target="test-intervals#interval_oo">
        <presentation precedence="1000" xml:lang="en">
          <mfenced open="(" close=")">
            <arg name="a" precedence="10"/>
            <arg name="b" precedence="10"/>
          </mfenced>
        </presentation>
        <presentation precedence="1000">
          <mfenced open="]" close="[">
            <arg name="a" precedence="10"/>
            <arg name="b" precedence="10"/>
          </mfenced>
        </presentation>
        <prototype>
  <apply>
    <csymbol uri="test-intervals#interval_oo"/>
    <arg name="a"/>
    <arg name="b"/>
  </apply>
      </prototype>
      </notation>
    

    <signature> [type=interval-type](algebraic,algebraic) -> interval(interval-type) </signature>
    
    
    <renderedMMLexample><description>In the English language.</description><![CDATA[<interval closure="open">
  <ci>x</ci>
  <cn>1</cn>
</interval>]]></renderedMMLexample>
        <renderedMMLexample><description>In a language different than English.</description><![CDATA[<interval closure="open">
  <cn>0</cn>
  <cn>1</cn>
</interval>]]></renderedMMLexample>
<!-- <MMLexample><![CDATA[<interval>
  <bvar><ci>x</ci></bvar>
  <condition>
    <apply><lt/><cn>0</cn><ci>x</ci></apply>
    </condition>
</interval>]]></MMLexample> -->
<renderedMMLexample><![CDATA[<apply><int/>
  <interval><cn>0</cn><cn>1</cn></interval>
  <ci type="function">f</ci>
</apply>]]></renderedMMLexample>
      </MMLdefinition>

</mcd>
