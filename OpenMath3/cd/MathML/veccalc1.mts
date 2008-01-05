<?xml version="1.0" encoding="utf-8"?>
<mcd>
      <MMLdefinition id="cds_divergence"  cdrole="application" arity="unary">
        <name>divergence</name>
        <description>
          <p>This symbol is used to represent the divergence function.</p>
	  <p>Given, one argument which is a vector of scalar valued functions defined on
	  the coordinates x_1, x_2, ... x_n.  It returns a scalar value function.  That
	  function satisfies the defining relation:
	  </p>
	  <p>divergence(F) = \partial(F_(x_1))/\partial(x_1) + ... + \partial(F_(x_n))/\partial(x_n) 
	  </p>
	  <p>The functions defining the coordinates may be defined implicitly as
	  expressions defined in terms of the coordinate names, in which case the
	  coordinate names must be provided as bound variables.</p>
	</description>
	<discussion>
	  <p>The <el>divergence</el> element is the vector calculus divergence operator,
	  often called div.</p>
	</discussion>
        <classification>unary function</classification>
	<rendering>
	  <p><graphic role="inline" source="image/f4070.gif" alt="\mathop{\mathrm{div}} a"/>
	  or<graphic role="inline" source="image/f4070b.gif" alt="\nabla \cdot a"/></p>
	</rendering>
        <signature>(vector(function)) -> function </signature>
        <signature>(bvar+,vector(algebraic)) -> algebraic </signature>

        <MMLexample><![CDATA[<apply>
  <divergence/>
  <ci> a </ci>
</apply>]]></MMLexample>

	<MMLexample><![CDATA[<apply><divergence/><ci type="vector"> E</ci></apply>]]></MMLexample>
        
	<MMLexample>
	  <![CDATA[<declare><ci>F</ci><vector><ci>f1</ci><ci>f2</ci><ci>f3</ci></vector></declare>
<apply><divergence/><ci>F</ci></apply>]]>
	</MMLexample>

        <MMLexample><![CDATA[<apply><divergence/>
<bvar><ci>x</ci></bvar><bvar><ci>y</ci></bvar><bvar><ci>z</ci></bvar>
  <vector>
    <apply><plus/><ci>x</ci><ci>y</ci></apply>
    <apply><plus/><ci>x</ci><ci>z</ci></apply>
    <apply><plus/><ci>z</ci><ci>y</ci></apply>
  </vector>
</apply>]]></MMLexample>

	<MMLexample>
	  <description>
	    <p>If <var>a</var> is a vector field defined inside a closed surface
	    <var>S</var> enclosing a volume <var>V</var>, then the divergence of
	    <var>a</var> is given by
	    </p>
	  </description>
<![CDATA[<apply>
  <eq/>
  <apply><divergence/><ci type="vectorfield">a</ci></apply>
  <apply>
    <limit/>
    <bvar><ci> V </ci></bvar>
    <condition>
      <apply>
        <tendsto/>
        <ci> V </ci>
        <cn> 0 </cn>
      </apply>
    </condition>
    <apply>
      <divide/>
      <apply>
        <int encoding="text" definitionURL="SurfaceIntegrals.htm"/>
        <bvar><ci> S</ci></bvar>
        <ci> a </ci>
      </apply>
      <ci> V </ci>
    </apply>
  </apply>
</apply>]]>
	</MMLexample>
	  </MMLdefinition>
      
	  <MMLdefinition id="cds_grad"  cdrole="application" arity="1">
        <name>grad</name>
        <description>
          <p>The gradient element is the vector calculus gradient operator, often called
          grad.  It represents the operation that constructs a vector of partial
          derivatives vector( df/dx_1 , df/dx_2, ... df/dx_n )
	  </p>
	</description>
	<discussion>
	  <p>The <el>grad</el> element is the vector calculus gradient operator, often
	  called grad.</p>
	</discussion>
	<classification>unary function</classification>
	<rendering>
	  <p><graphic role="inline" source="image/f4071.gif" alt="\mathop{\mathrm{grad}} f"/>
	  or<graphic role="inline" source="image/f4071b.gif" alt="\nabla a"/></p>
	</rendering>
        <signature> (function) -> vector(function) </signature>
        <signature>(bvar+,algebraic) -> vector(algebraic) </signature>
        <MMLexample>
	  <description> <p>Where for example <var>f</var> is a scalar function of three real variables.</p></description> 
	  <![CDATA[<apply><grad/><ci type="function"> f</ci></apply>]]>	
	</MMLexample>
	<MMLexample><![CDATA[<apply><grad/>
<bvar><ci>x</ci></bvar><bvar><ci>y</ci></bvar><bvar><ci>z</ci></bvar>
  <apply><times/><ci>x</ci><ci>y</ci><ci>z</ci></apply>
</apply>]]>
</MMLexample>
      </MMLdefinition>

      <MMLdefinition id="cds_curl"  cdrole="application" arity="1">
        <name>curl</name>
        <description>
          <p>This symbol is used to represent the curl operator. It requires both a
          coordinates and a vector of expressions defined over those coordinates. It
          returns a vector valued expression.</p>
          <p> In its functional form the coordinates are implicit in the definition of the
          function so it needs only one argument which is a vector valued function and
          returns a vector of functions.
	  </p>

          <p>Given F = F(x,y,z) = ( f1(x,y,z) , f2(x,y,z), f3(x,y,z) ) and coordinate
          names (x,y,z) the following relationship must hold:</p>

          <p>curl(F) = i X \partial(F)/\partial(x) + j X \partial(F)/\partial(y) + j X
          \partial(F)/\partial(Z) where i,j,k are the unit vectors corresponding to the
          x,y,z axes respectivly and the multiplication X is cross multiplication. </p>
	</description>
	<discussion>
	  <p>The <el>curl</el> element is the vector calculus curl operator.</p>
	</discussion>
	<classification>unary function</classification>
	<rendering>
	  <p><graphic role="inline" source="image/f4072.gif" alt="\mathop{\mathrm{curl}} a"/>
	  or<graphic role="inline" source="image/f4072b.gif" alt="\nabla \times a"/></p>
	</rendering>
	<signature>(bvar,bvar,bvar,algebraic) -> vector(algebraic)</signature>
        <signature> (vector(function) ) -> vector(function) </signature>
        <property>
	  <description>
	    <p>
	    curl(F) = i X \partial(F)/\partial(x) + j X \partial(F)/\partial(y) + j X \partial(F)/\partial(Z) </p>
	  </description>
	</property>
	<MMLexample>
	  <description><p>Where for example <var>a</var> is a vector field.</p></description>
	  <![CDATA[<apply><curl/><ci>a</ci></apply>]]>
	</MMLexample>
	<MMLexample><![CDATA[<apply><curl/><ci type="vector">f</ci></apply>]]></MMLexample>
      </MMLdefinition>
      
      <MMLdefinition id="cds_laplacian"  cdrole="application" arity="1">
        <name>laplacian</name>
        <description>
          <p>This is the element used to indicate an application of the laplacian
          operator.  It may be applied directly to expressions, in which case the
          coordinate names are provided in order by use of bvar.  It may also be applied
          directly to a function F in which case, the definition below is for F = F(x_1,
          x_2, ... x_n) where x_1, x_2, ...  x_n are the coordinate names.
	  </p>
          <p>laplacian(F) = \partial^2(F)/\partial(x_1)^2 + ... + \partial^2(F)/\partial(x_n)^2</p>
        </description>
	<discussion>
	  <p>The <el>laplacian</el> element is the vector calculus
	  laplacian operator.</p>
	</discussion>
        <classification>unary function</classification>
	<rendering><graphic source = "image/f4073.gif" alt = "\nabla^2 f"/></rendering>
	<signature> (bvar+,algebraic) -> algebraic </signature>
        <signature>(scalar_valued_function) -> scalar_valued_function </signature>
        <MMLexample><![CDATA[<apply><laplacian/><ci type="vector"> E</ci></apply>]]></MMLexample>
        <MMLexample><![CDATA[<declare><ci>F</ci><vector><ci>f1</ci><ci>f2</ci><ci>f3</ci></vector></declare>
<apply><laplacian/><ci>F</ci></apply>]]></MMLexample>
        <MMLexample><![CDATA[<apply><laplacian/>
  <bvar><ci>x</ci></bvar><bvar><ci>y</ci></bvar><bvar><ci>z</ci></bvar>
  <apply><ci>f</ci>
    <ci>x</ci><ci>y</ci>
  </apply>
</apply>]]></MMLexample>
	<MMLexample>
	<description><p>Where for example<var>f</var> is a scalar function of three real variables.</p>
	</description><![CDATA[<apply>
  <eq/>
  <apply><laplacian/>
    <ci> f </ci>
  </apply>
  <apply>
    <divergence/>
    <apply><grad/>
      <ci> f </ci>
    </apply>
  </apply>
</apply>]]></MMLexample>
      </MMLdefinition>

</mcd>
