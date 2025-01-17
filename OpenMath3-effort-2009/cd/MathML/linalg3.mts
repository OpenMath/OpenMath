<?xml version="1.0" encoding="utf-8"?>
<mcd>
  <MMLdefinition id="cds_vector" cdrole="application" arity="nary" container="yes">
    <name>vector</name>
    <description>
      <p>A vector is an ordered n-tuple of values representing an element of an
      n-dimensional vector space.  The "values" are all from the same ring, typically real
      or complex.  Where orientation is important, such as for pre or post multiplication
      by a matrix a vector is treated as if it were a column vector and its transpose is
      treated a row vector.  The type attribute can be used to explicitly specify that a
      vector is a "row" vector.  See CRC Standard Mathematical Tables and Formulae,
      editor: Dan Zwillinger, CRC Press Inc., 1996, [2.4]</p>
    </description>

    <discussion>
      <p><el>vector</el> is the container element for a vector. The child elements form
      the components of the vector.</p>

      <p>For purposes of interaction with matrices and matrix multiplication, vectors are
      regarded as equivalent to a matrix consisting of a single column, and the transpose
      of a vector behaves the same as a matrix consisting of a single row. Note that
      vectors may be rendered either as a single column or row.</p>

      <p>In general a vector can be constructed by providing a function and a
      1-dimensional domain of application.  The entries of the vector correspond to the
      values obtained by evaluating the function at the points of the domain.  The
      qualifications defined by a <el>domainofapplication</el> element can also be
      abbreviated in several ways including a <el>condition</el> placed on a bound
      variable and an expression involving that variable.</p>

      <p>The <el>vector</el> element constructs vectors from an <var>n</var>-dimensional
      vector space so that its <var>n</var> child elements typically represent real or
      complex valued scalars as in the three-element vector

<eg role = "mathml"><![CDATA[<vector>
  <apply><plus/><ci>x</ci><ci>y</ci></apply>
  <cn>3</cn>
  <cn>7</cn>
</vector>]]></eg></p>

<p>A vector can also be constructed by evaluating a function over a specific domain
       of application, each evaluation corresponding to an entry in the vector.  In its
       most general form a domain is explicitly specified by a
       <el>domainofapplication</el> element and a function. Optionally the
       <el>domainofapplication</el> can be augmented by a <el>bvar</el> element and an
       algebraic expression expressed in terms of it.  Qualifications defined by a
       <el>domainofapplication</el> element can be abbreviated in several ways as
       described in <specref ref="contm_qualifiers"/>.</p>
	</discussion>
        <classification> constructor </classification>
        <MMLattribute>
          <attname> type </attname>
          <attvalue>  row | column | MathMLType </attvalue>
          <attdefault> column </attdefault>
        </MMLattribute>
	<rendering>
	  <graphic role="display" source="image/f4108.gif" alt="\left(\begin{array}{c} 1 \\ 2 \\ 3 \\ x \end{array} \right)"/>
	  <p>(1, 2, 3, 
	  <var>x</var>)</p>
	</rendering>
	<optype>ncontainer</optype>
        <signature>(real*) -> vector(type=real)</signature>
        <signature>[type=vectortype]((anything)*) -> vector(type=vectortype)</signature>
        <signature> (domainofapp,function) -> vector </signature>
        <signature> (bvar+,domainofapp,anything) -> vector </signature>
        <property>
	  <description><p>vector=column_vector</p></description>
        </property>
        <property>
          <description><p>matrix * vector = vector</p></description>
        </property>
        <property>
          <description><p>matrix * column_vector = column_ vector</p></description>
        </property>
        <property>
          <description><p>row_vector*matrix  = row_vector</p></description>
        </property>
        <property>
          <description><p>transpose(vector) = row_vector</p></description>
        </property>
        <property>
          <description><p>transpose(column_vector) = row_vector</p></description>
        </property>
        <property>
          <description><p>transpose(row_vector) = column_vector</p></description>
        </property>
        <property>
          <description><p>distributive over scalars</p></description>
        </property>
        <property>
          <description><p>associativity.</p></description>
        </property>
        <property>
          <description><p>Matrix * column vector</p></description>
	</property>
        <property>
          <description><p>row vector * Matrix</p></description></property>
        <MMLexample>
	  <![CDATA[<vector><cn>1</cn><cn>2</cn><cn>3</cn><ci>x</ci></vector>]]>
	</MMLexample>

        <MMLexample role="mathml-fragment">
	  <![CDATA[<vector type="row"><cn>1</cn><cn>2</cn><cn>3</cn><ci>x</ci></vector>]]>
	</MMLexample>
        <MMLexample role="mathml-fragment"><![CDATA[<vector>
  <bvar><ci type="integer">i</ci></bvar>
  <lowlimit><ci>1</ci></lowlimit>
  <uplimit><ci>10</ci></uplimit>
  <apply><power/>
    <ci>x</ci>
    <ci>i</ci>
  </apply>
</vector>]]></MMLexample>
      </MMLdefinition>
</mcd>
